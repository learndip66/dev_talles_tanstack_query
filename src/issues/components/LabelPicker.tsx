import { useQuery } from '@tanstack/react-query';
import { getLabelsFromRepo } from '../services/github.service';

export const LabelPicker = () => {
  const { data, isFetched, error } = useQuery({
    queryKey: ['labels-from-repo'],
    queryFn: getLabelsFromRepo,
    staleTime: 1000 * 60 * 60, // 1 hour
    retry: false,
  });

  if (!isFetched) return <p>Loading...</p>;
  if (error) return <p>Sin labels disponibles...</p>;

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {data?.map((item) => (
        <span
          key={item.id}
          className="px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer"
          style={{
            border: `1px solid #${item?.color}`,
            color: `#${item?.color}`,
          }}
        >
          {item?.name}
        </span>
      ))}
    </div>
  );
};
