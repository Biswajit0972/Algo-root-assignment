import { useEffect, useState } from "react";
import { getDetails } from "../../../utils/query/query";
import CardList from "../../../components/CardList";
import DetailsHeader from "../../../components/DetailsHeader";
import { toast } from "react-toastify";
import { myOptions } from "../../../types/td";
import Button from "../../../components/Button";

type User = {
  name: string;
  age: number;
  email: string;
  city: string;
  isActive: boolean;
};

const Details = () => {
  const [details, setDetails] = useState<User[]>([]);
  const [searchResult, setSearchResult] = useState<User[]>([]);
  const [page, setPage] = useState(1);
  const [sortContent, setSortContent] = useState<myOptions>({
    order: 0,
    type: "",
  });

  useEffect(() => {
    async function getInfo() {
      const res = await getDetails(page);
      setDetails(res.data);
    }
    getInfo();
  }, [page]);

  function sortDetails() {
    const { order, type } = sortContent;

    if (Number(order) === 0 || type === "") {
      toast.error("Please add valid sort details");
      return;
    }

    switch (type) {
      case "age": {
        if (Number(order) === 1) {
          details.sort((a, b) => a.age - b.age);
          console.log("ok");
        } else {
          details.sort((a, b) => b.age - a.age);
        }
        setDetails([...details]);
        return;
      }
      case "name": {
        details.sort((a, b) =>
          Number(order) === 1
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        );
        setDetails([...details]);
        return;
      }
      case "isActive": {
        if (Number(order) === 1) {
          details.sort((a, b) => Number(a.isActive) - Number(b.isActive));
          console.log("ok");
        } else {
          details.sort((a, b) => Number(b.isActive) - Number(a.isActive));
        }
        setDetails([...details]);
        return;
      }
      default:
        console.log("Unknown sort type");
        return;
    }
  }

  function searchUser(data: string) {
    if (data.length < 3) {
      setSearchResult([]);
      return;
    }

    const lowervalue = data.toLocaleLowerCase().trim();
    const fliteredItem = details.filter((item) =>
      item.name.toLocaleLowerCase().trim().includes(lowervalue)
    );
    setSearchResult(fliteredItem);
  }
  
  console.log(page);
  return (
    <div className="relative h-full w-full font-base font-white ">
      <DetailsHeader
        sortDetails={sortDetails}
        setSortContent={setSortContent}
        searchUser={searchUser}
      />
      <div className="overflow-x-hidden w-full relative h-[calc(100%-48px)] flex">
        <div className=" absolute h-36 w-20  z-10 bottom-3.5 right-1.5 flex-col items-center gap-3">
          <Button className="h-15 w-15 rounded-full text-2xl" variant="style" onClick={() => setPage(page + 1)}>
            +
          </Button>
          <Button className="h-15 w-15 rounded-full text-2xl" variant="danger" onClick={() => setPage(page - 1)}>
            -
          </Button>
        </div>
        <CardList users={searchResult.length > 0 ? searchResult : details} />
      </div>
    </div>
  );
};

export default Details;
