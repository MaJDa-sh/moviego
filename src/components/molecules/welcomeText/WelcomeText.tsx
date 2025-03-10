const WelcomeText = () => {
  return (
    <div className="mx-auto">
      <p className="text-2xl md:text-6xl font-thin">
        Searching for something to watch?
      </p>
      <p className="text-3xl md:text-7xl font-light text-primary">
        We got you.
      </p>
      <p className="max-w-10/12 mt-4 font-extralight text-balance">
        Explore a world of cinema with{' '}
        <span className="font-normal">MovieGo</span>. Whether you&apos;re in the
        mood for action, comedy, or drama, we&apos;ve got you covered with a
        variety of options.
      </p>
    </div>
  );
};

export default WelcomeText;
