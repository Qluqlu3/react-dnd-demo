export type Data = {
	id: number,
	text: string
}

export type DragData =  {
  id: any;
  text: string;
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}
