export default function Legend() {
  return (
    <div className="absolute bottom-[30px] right-14 rounded-lg bg-gray-100 p-3 ring-2 ring-gray-400/50 flex">
      <div className="flex flex-col space-y-2 items-center">
        <div>top</div>
        <div className="bg-gradient-to-b from-blue-500 to-green-500 h-12 w-6"></div>
        <div>bottom</div>
      </div>
    </div>
  );
}
