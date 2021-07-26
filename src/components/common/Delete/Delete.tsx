import React from "react";
import { Button } from "react-bootstrap"

type Props = {
  onClick: () => void;
}

const Delete: React.FC<Props> = ({ onClick }) => {
  return (
    <Button
      variant="outline-danger"
      size="sm"
      onClick={onClick}
    >
      Delete
    </Button>
  );
}

export default Delete;