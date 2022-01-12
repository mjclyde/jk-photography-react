export default function SectionTitle({ title, subTitle }) {
  return (
    <div className="mt-20 mb-10">
      <div className="flex items-center">
        <div className="border-b flex-grow"/>
        <h1 className="text-title">{title}</h1>
        <div className="border-b flex-grow"/>
      </div>
      <div className="text-center mt-3 text-lg md:text-xl font-light text-gray-600">{subTitle}</div>
    </div>
  );
}
