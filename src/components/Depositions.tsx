type DepositonsProps = {
  image: string;
  estilo: string;
}

const Depositons: React.FC<DepositonsProps> = ({ image, estilo }) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-md mb-4 p-4 ${estilo}`}>
      <img src={image} alt="Modelo de Convite" className="w-full h-auto object-cover" />
    </div>
  );
};

export default Depositons;
