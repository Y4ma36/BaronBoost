import { useQuery } from "@tanstack/react-query";
import * as auth from "../../Utils/auth.jsX";
import { useRecoilValue } from "recoil";

const useOrderData = () => {
  //   All Order
  const { data: allOrder, error: allError } = useQuery({
    queryKey: ["allOrder"],
    queryFn: () => auth.allOrders().then((res) => res.data),
  });

  //Solo Order
  const { data: soloOrder, error: soloEror } = useQuery({
    queryKey: ["soloOrder"],
    queryFn: () => auth.soloOrders().then((res) => res.data),
  });

  //Duo Order
  const { data: duoOrders, error: duoEror } = useQuery({
    queryKey: ["duoOrders"],
    queryFn: () => auth.duoOrders().then((res) => res.data),
  });

  //NetWins Order
  const { data: netWinsOrders, error: netWinsError } = useQuery({
    queryKey: ["netWinsOrders"],
    queryFn: () => auth.netWinsOrders().then((res) => res.data),
  });

  //Coach Order
  const { data: coachOrders, error: coachError } = useQuery({
    queryKey: ["coachOrders"],
    queryFn: () => auth.coachOrders().then((res) => res.data),
  });

  return {
    allOrder,
    soloOrder,
    duoOrders,
    netWinsOrders,
    coachOrders,
  };
};

export default useOrderData;
