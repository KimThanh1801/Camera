import { useEffect, useState } from "react";

function useGetData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://656ca88ee1e03bfd572e9c16.mockapi.io/products");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };

    fetchData();
  }, []);

  return data;
}

export default useGetData;