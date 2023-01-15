import { request, gql } from "graphql-request";
import useSWR from "swr";

const API = "https://countries.trevorblades.com";
const query = gql`
  query ExampleQuery {
    countries {
      code
      name
    }
  }
`;

type FetchData = {
  countries: {
    code: string;
    name: string;
  }[];
};

const GetCountries = () => {
  const { data, error } = useSWR<FetchData>(query, (query) =>
    request(API, query)
  );
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return data.countries.map((country) => (
    <li key={country.code}>{country.name}</li>
  ));
};

function App() {
  return (
    <div>
      <header className="p-3 h-10 bg-slate-300">test</header>
      <main className="p-3">{GetCountries()}</main>
    </div>
  );
}

export default App;
