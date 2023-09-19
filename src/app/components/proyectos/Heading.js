function Heading(props) {
  return (
    <h1 className="mb-3 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r to-violet-800 from-blue-600">
      {props.title}
    </h1>
  );
}

export default Heading;
