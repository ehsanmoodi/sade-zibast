export const formatSeconds = (secs: number) => {
  const hours = Math.floor(secs / (60 * 60));

  const divisorForMinutes = secs % (60 * 60);
  const minutes = Math.floor(divisorForMinutes / 60);

  const divisor_for_seconds = divisorForMinutes % 60;
  const seconds = Math.ceil(divisor_for_seconds);

  const timeToString = `${
    hours ? `${hours} ساعت ${minutes || seconds ? " و " : ""} ` : ""
  } ${minutes ? `${minutes} دقیقه ${seconds ? " و " : ""} ` : ""} ${
    seconds ? `${seconds} ثانیه` : ""
  }`;

  // const tomeToString = `${hours && `${hours} : `}` + `${minutes && `${minutes} : `}` + `${seconds && `${seconds}`}`;

  return timeToString;
};
