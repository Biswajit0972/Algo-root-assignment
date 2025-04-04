import { FC } from "react";
import Card from "./Card";
import  {User} from "../types/td"

const CardList: FC<{ users: User[] }> = ({ users }) => {
    return (
        <div className="px-2 py-2 relative h-full w-full overflow-x-hidden overflow-y-auto">
            {users.map((user) => (
                <Card key={user.email} user={user} />
            ))}
        </div>
    );
}

export default CardList