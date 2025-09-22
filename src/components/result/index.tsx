import type { AdvancedUser } from "../../models/advancedUsers";
import type { BasicUser } from "../../models/basicUsers";

type ResultProps = {
  user: BasicUser | AdvancedUser | null;
  setUser:
    | React.Dispatch<React.SetStateAction<BasicUser | null>>
    | React.Dispatch<React.SetStateAction<AdvancedUser | null>>;
};

export function Result({ user, setUser }: ResultProps) {
  return (
    <article className="flex flex-col gap-4 w-full md:w-2/5 items-center">
      <h4 className="text-xl font-semibold sm:text-2xl text-gray-800">
        Result
      </h4>
      {user && (
        <>
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <button onClick={() => setUser(null)}>Delete Record</button>
        </>
      )}
    </article>
  );
}
