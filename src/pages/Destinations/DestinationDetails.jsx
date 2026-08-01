import { useParams } from "react-router";
import destinations from "../../data/destinations";
import DestinationContent from "../../components/destinations/DestinationContent";


const DestinationDetails = () => {
  const { id } = useParams();

  const destination = destinations.find((item) => item.id === Number(id));
  if (!destination) {
    return (
      <div className="py-40 text-center">
        <h2 className="text-4xl font-bold">Destination Not Found</h2>
      </div>
    );
  }

  return (
    <>

      <DestinationContent destination={destination} />
    </>
  );
};

export default DestinationDetails;
