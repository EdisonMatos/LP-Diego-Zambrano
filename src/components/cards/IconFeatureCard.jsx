export default function IconFeatureCard(props) {
  const { icon, title, paragraph, className } = props;

  return (
    <div
      className={`w-full tablet1:h-[320px] tablet1:w-[290px] tablet2:h-[320px] desktop1:w-[250px] desktop1:h-[320px] desktop2:h-[296px] flex flex-col items-center desktop1:hover:scale-110 transition p-[18px] desktop1:p-0 ${className}`}
    >
      <div className="h-[64px] w-[64px] mb-[24px] bg-primary rounded-md flex justify-center items-center text-secondary">
        {icon}
      </div>
      <h1 className="h-auto font-bold font-mainFont text-title3 text-center mb-[16px] text-secondary leading-[30px]">
        {title}
      </h1>
      <p className="text-center text-black opacity-70 font-mainFont w-[90%]">
        {paragraph}
      </p>
    </div>
  );
}
