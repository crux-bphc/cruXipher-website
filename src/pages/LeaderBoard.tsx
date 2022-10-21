import { Pagination } from "@mantine/core";

const LeaderBoard = () => {
  return (
    <div>
      LeaderBoard
      <Pagination size="xl" total={20} siblings={1} initialPage={1} withEdges />
    </div>
  );
};

export default LeaderBoard;
