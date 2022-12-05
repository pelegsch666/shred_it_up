import { Grid, _ } from "gridjs-react";
import { faker } from '@faker-js/faker';

export default function ExTable({ data }) {
  console.log(data);

  const grid = new Grid({
    columns: [
      "Name",
      {
        name: "Email",
        formatter: (cell) => _(<i>{cell}</i>),
      },
      "Actions",
    ],
    data: Array(5)
      .fill()
      .map((x) => [
        faker.name.fullName(),
        faker.internet.email(),
        _(
          <button
            className={"py-2 px-4 border rounded-md text-white bg-blue-600"}
            onClick={() => alert("clicked!")}
          >
            Edit
          </button>
        ),
      ]),
  });

  return <Grid data={grid.data} columns={grid.columns} />;
}
