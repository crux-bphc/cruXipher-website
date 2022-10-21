const Rules = () => {
  return (
    <div className="px-32 pt-16 pb-8">
      <h1 className="font-bold text-3xl text-center">Rules</h1>
      <ol className="list-decimal">
        <li className="text-2xl pt-1 font-normal">
          <p>Teams can be upto 3 members</p>
        </li>
        <li className="text-2xl pt-1 font-normal">
          <p>The event will last for 120 minutes</p>
        </li>
        <li className="text-2xl pt-1 font-normal">
          <p>
            For each question, the answer will be in the form of a text flag,
            which teams are expected to find by using the concepts of the domain
            under which the question is given.
          </p>
        </li>
        <li className="text-2xl pt-1 font-normal">
          <p>
            Teams are encouraged to use the Internet in order to go through any
            necessary documentation. However, teams may not attempt to
            collaborate with each other or share answers.
          </p>
        </li>
        <li className="text-2xl pt-1 font-normal">
          <p>
            The required libraries and software for the questions will either be
            already present on the systems or can be installed using a shell
            script which we’ll provide.
          </p>
        </li>
        <li className="text-2xl pt-1 font-normal">
          <p>Mobile phones will not be allowed inside the venue.</p>
        </li>
      </ol>
      <h3 className="font-bold text-2xl pt-10">Duration : 2 hours</h3>
    </div>
  );
};

export default Rules;
