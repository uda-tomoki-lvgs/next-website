import Link from "next/link";

type TabProps = {
    color: string,
    message: string,
    path: string,
}

const TabItem = ({ color, message, path } : TabProps) => {
    return (
        <div className="tab-item">
            <span style={{color: color}}>●</span>
            <Link href={path}>{message}</Link>
        </div>
    )
}

export default TabItem;
