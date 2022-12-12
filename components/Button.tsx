const Button = ({ Text,width }: { Text: string,width:string }) => {
  return (
    <button className={`border-[1px] border-solid border-[#3fffff] bg-[#0a192f] text-[#ccd6f6] px-[1rem] py-[0.3rem] cursor-pointer transition-all duration-700 ease-in-out shadow-[inset_0_0_0_0_#3fffff] w-[${width}] p-[2rem] backdrop-blur-[10px] outline-none hover:shadow-[inset_${width}_0_0_0_#00ffffa7] hover:text-[#0a192f]`}>
      {Text}
    </button>
  );
};

export default Button;
