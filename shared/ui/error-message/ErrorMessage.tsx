type Props = {
  error: string;
};
export const ErrorMessage = ({ error }: Props) => {
  return <span className="text-[13px] text-red-600 block">{error}</span>;
};
