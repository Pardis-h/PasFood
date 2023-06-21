import { useRouter } from "next/router";
import DetailsPage from "../../components/templates/DetailsPage";

function Details({ data }) {
  const router = useRouter();
  return <DetailsPage data={data} />;
}

export default Details;

export async function getStaticPaths() {
    try{
        const res = await fetch(`${process.env.BASE_URL}/data`);
        const data = await res.json();
        const paths = data.map((food) => ({ params: { id: food.id.toString() } }));
        return {
          paths,
          fallback: true,
        };
    }catch{
        return{
            paths:[],
            fallback: 'blocking',
        }
    }
}

export async function getStaticProps(context) {
  try {
    const { params } = context;
    const res = await fetch(`${process.env.BASE_URL}/data/${params.id}`);
    const data = await res.json();
    // console.log(data);

    return {
      props: {
        data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}
