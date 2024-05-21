interface ErrorProps {
  type: "post" | "user";
}

const Error = ({ type }: ErrorProps) => {
  return type == "user" ? (
    <>
      <h1 className="mb-10">ERROR 404</h1>
      <h2>The user you are looking for does not exist.</h2>
    </>
  ) : (
    <>
      <h1 className="mb-10">ERROR 404</h1>
      <h2>The post you are looking for does not exist.</h2>
    </>
  );
};

export default Error;
