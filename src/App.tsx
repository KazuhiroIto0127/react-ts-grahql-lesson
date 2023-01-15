import { request, gql } from "graphql-request";

const query = gql`
  {
    company {
      ceo
    }
    roadster {
      apoapsis_au
    }
  }
`;

function App() {
  request("https://api.spacex.land/graphql/", query).then((data) =>
    console.log(data)
  );

  return (
    <div>
      <header className="p-3 h-10 bg-slate-300">test</header>
      <main className="p-3">main</main>
    </div>
  );
}

export default App;
