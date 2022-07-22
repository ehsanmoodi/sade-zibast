import type { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import {
  Button,
  DateInput,
  Dropzone,
  InnerHeader,
  Input,
  InputGroup,
  MapModal,
  TextArea,
} from "../../../components";

const MapWithNoSSR = dynamic(() => import("../../../components/Map"), {
  ssr: false,
});

import type { Value as DateValue } from "react-multi-date-picker";
import Image from "next/image";
import { AddLocation, Delete2, EditLocation } from "../../../icons";
import fetchJson, { initPostRequest } from "../../../lib/fetchJson";
import { toast } from "react-toastify";
import { messages } from "../../../utils/messages";
import { endPoints } from "../../../utils/endpoints";
import { withIronSessionSsr } from "iron-session/next";
import { sessionOptions } from "../../../lib/session";
import { useRouter } from "next/router";

const CreateCards: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ token }) => {
  const router = useRouter();

  const mapCenter = {
    lat: 35.7219,
    lng: 51.3347,
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
  }>({
    lat: 0,
    lng: 0,
  });

  const [images, setImages] = useState<
    {
      imageFile: File;
      preview: any;
    }[]
  >([]);

  const [data, setData] = useState<{
    name: string;
    slug: string;
    description: string;
    description_second: string;
    address: string;
    date_description: string;
    date: DateValue;
    images: string[];
  }>({
    name: "",
    slug: "",
    description: "",
    description_second: "",
    address: "",
    date_description: "",
    date: new Date(),
    images: [],
  });

  const [processing, setProcessing] = useState<boolean>(false);

  const price = 290000;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    acceptedFiles.map(async (file) => {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response: any = await fetchJson(
          endPoints.uploadFiles + "?is_image=1",
          {
            method: "POST",
            body: formData,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Preview image
        setImages((prevImages) => [
          ...prevImages,
          {
            imageFile: file,
            preview: URL.createObjectURL(file),
          },
        ]);

        // Add uploaded image name to data
        setData({ ...data, images: [...data.images, response.data.name] });
        toast.success(messages.successUploadImage);
      } catch (error) {
        toast.error(messages.failedUploadImage);
        console.log(error);
      }

      return file;
    });
  }, []);

  useEffect(() => {
    return () => images.forEach((image) => URL.revokeObjectURL(image.preview));
  }, []);

  const createCard = async () => {
    setProcessing(true);

    if (data.name === "" || data.date === "") {
      toast.error(messages.requiredCardNameDate);
      setProcessing(false);
      return;
    }

    try {
      await fetchJson(
        endPoints.cards,
        initPostRequest(
          {
            name: data.name,
            date: data.date,
            slug: data.slug,
            date_description: data.date_description,
            description: data.description,
            description_second: data.description_second,
            address: data.address,
            latitude: position.lat,
            longitude: position.lng,
            images: data.images,
          },
          {
            Authorization: `Bearer ${token}`,
          }
        )
      );

      setProcessing(false);
      router.push("/panel/cards");
      toast.success(messages.successCreateCard);
    } catch (error) {
      toast.error(messages.failedCreateCard);
      setProcessing(false);
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>ساخت کارت جدید</title>
        <meta
          name="description"
          content="در این صفحه از پنل کاربری می‌توانید کارت جدیدی ایجاد کنید"
        />
      </Head>

      <main className="min-h-screen bg-vista-white">
        <InnerHeader title="ایجاد کارت دعوت جدید" backLink="/panel/cards" />

        <div className="create-page">
          <div className="create-page__col">
            <Input
              id="name"
              type="text"
              label="عنوان کارت"
              value={data.name}
              onChange={(event) =>
                setData({ ...data, name: event.target.value })
              }
            />
            <InputGroup
              title="لینک دعوت"
              description="لینک دلخواه خود را تایپ کنید. این لینکی است که برای دعوتی های خود ارسال خواهید کرد."
            >
              <Input
                id="slug"
                type="text"
                dir="ltr"
                extra=".sadezibast.ir"
                value={data.slug}
                onChange={(event) =>
                  setData({ ...data, slug: event.target.value })
                }
              />
            </InputGroup>
            <TextArea
              rows={4}
              id="description"
              label="متن اول (بالای صفحه)"
              value={data.description}
              onChange={(event) =>
                setData({ ...data, description: event.target.value })
              }
            />
            <InputGroup title="گالری تصاویر">
              <Dropzone onDrop={onDrop} />
              <div className="thumbs">
                {images.map((image, index) => (
                  <div key={index}>
                    <Image
                      src={image.preview}
                      alt={image.imageFile.name}
                      layout="fill"
                      objectFit="contain"
                      objectPosition="center"
                    />
                  </div>
                ))}
              </div>
            </InputGroup>
          </div>
          <div className="create-page__col">
            <TextArea
              rows={4}
              id="description_second"
              label="متن دوم (بعد از گالری)"
              value={data.description_second}
              onChange={(event) =>
                setData({ ...data, description_second: event.target.value })
              }
            />
            <TextArea
              rows={4}
              id="address"
              label="آدرس خود را بنویسید..."
              value={data.address}
              onChange={(event) =>
                setData({ ...data, address: event.target.value })
              }
            />

            {position.lat !== 0 && position.lng !== 0 && (
              <MapWithNoSSR
                position={{ lat: position.lat, lng: position.lng }}
              />
            )}

            {position.lat === 0 && position.lng === 0 && (
              <span
                className="map-action"
                onClick={() => {
                  setIsModalOpen(!isModalOpen);
                  setPosition(mapCenter);
                }}
              >
                <AddLocation />
                انتخاب موقعیت مکانی بر روی نقشه
              </span>
            )}

            {position.lat !== 0 && position.lng !== 0 && (
              <span
                className="map-action"
                onClick={() => setIsModalOpen(!isModalOpen)}
              >
                <EditLocation />
                ویرایش موقعیت مکانی
              </span>
            )}

            {position.lat !== 0 && position.lng !== 0 && (
              <span
                className="map-action"
                onClick={() => setPosition({ lat: 0, lng: 0 })}
              >
                <Delete2 />
                حذف موقعیت مکانی
              </span>
            )}
          </div>
          <div className="create-page__col">
            <InputGroup guide="مثلا: دوشنبه ساعت ۱۱ به صرف چایی و شیرینی میبینمتون.">
              <TextArea
                rows={4}
                id="date_description"
                label="تاریخ و زمان"
                value={data.date_description}
                onChange={(event) =>
                  setData({ ...data, date_description: event.target.value })
                }
              />
            </InputGroup>
            <InputGroup
              title="لطفا تاریخ را برای ثبت در سیستم مجددا انتخاب کنید."
              guide="کارت دعوت یک هفته پس از این تاریخ منقضی خواهد شد."
            >
              <DateInput
                value={data.date}
                onChangeInput={(value) =>
                  setData({ ...data, date: value.format("YYYY-MM-DD") })
                }
              />
            </InputGroup>
            <div className="create-page__invoice">
              <div className="create-page__invoice__title">فاکتور</div>
              <div className="create-page__invoice__pricing">
                <span>تعرفه کارت دعوت</span>
                <span>{price} تومان</span>
              </div>
            </div>
            <Button onClick={createCard} processing={processing}>
              پرداخت
            </Button>
          </div>
        </div>
      </main>

      <MapModal
        position={position}
        setPosition={setPosition}
        isOpen={isModalOpen}
        toggleModal={() => setIsModalOpen(!isModalOpen)}
      />
    </>
  );
};

export default CreateCards;

export const getServerSideProps = withIronSessionSsr(
  async function getServerSideProps({ req, res }) {
    const sessionToken = req.session.token?.token;

    if (sessionToken === undefined) {
      res.setHeader("Location", "/login");
      res.statusCode = 302;
      res.end();

      return {
        props: {
          token: "",
        },
      };
    }

    return {
      props: {
        token: sessionToken,
      },
    };
  },
  sessionOptions
);
