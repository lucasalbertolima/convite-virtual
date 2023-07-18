type ModelsConviteProps = {
  image: string;
  title: string;
  description: string;
  estilo: string;
}

const ModelsConvite: React.FC<ModelsConviteProps> = ({ image, title, description, estilo }) => {
  return (
    <div className={`rounded-lg overflow-hidden shadow-md mb-4 p-4 ${estilo}`}>
      <img src={image} alt="Modelo de Convite" className="w-full h-auto object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="text-gray-600 " dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default ModelsConvite;
