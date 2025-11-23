import { useQuery } from '@tanstack/react-query';
import { getIssuesFromRepo } from '../services/github.service';
import { IssueItem } from './IssueItem';

export const IssueList = () => {
  const issues = useQuery({
    queryKey: ['issues-from-repo'],
    queryFn: getIssuesFromRepo,
    staleTime: 1000 * 60 * 120, // 2 hours
  });

  return (
    <>
      <div className="flex gap-4">
        <button className="btn active">All</button>
        <button className="btn">Open</button>
        <button className="btn">Closed</button>
      </div>
      {!issues?.isFetched ? (
        <p>Cargando...</p>
      ) : (
        <div className="mt-4">
          {issues?.data?.map((issue) => (
            <IssueItem key={issue?.id} {...issue} />
          ))}
        </div>
      )}
    </>
  );
};
