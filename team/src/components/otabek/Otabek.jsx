
const Otabek = ({vector, vectorr , okam , paragrf}) => {
  return (
    <div className="flex items-center justify-between container h-[600px]">
      <img src={vector} alt="icon" />

      <div className="flex  gap-[55px]">
        <img src={okam} alt="image" />

        <p className="font-[400] text-[#FFFFFFC7] text-[14px] w-[400px] mt-[120px]">{paragrf}</p>
      </div>

      <img src={vectorr} alt="icon" />
    </div>
  )
}

export default Otabek