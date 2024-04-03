type Props = {
  isActive?: boolean;
  children: JSX.Element | string;
};

const Tag = ({ isActive, children }: Props) => {
  return (
    <span
      className={
        isActive
          ? "text-zinc-100 bg-purple-800 px-2 py-1 rounded-full text-center"
          : "text-zinc-900 bg-zinc-200 px-2 py-1 rounded-full text-center"
      }
    >
      {children}
    </span>
  );
};

export default Tag;
