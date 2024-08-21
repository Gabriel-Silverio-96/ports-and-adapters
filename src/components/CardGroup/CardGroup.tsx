import {
  CardDelete,
  CardGet,
  CardPatch,
  CardPost,
} from "src/components/CardGroup/components";

function CardGroup() {
  return (
    <section>
      <CardGet />
      <CardPost />
      <CardPatch />
      <CardDelete />
    </section>
  );
}

export { CardGroup };
