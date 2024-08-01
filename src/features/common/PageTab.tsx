import "@/features/common/pagetab.css";
import TabItem from "@/features/common/TabItem";

const PageTab = () => {
  return (
    <div className="pagetab">
      <div className="tab-list">
        <TabItem color="#FFCCCC" message="トップ" path="/" />
        <TabItem color="#0099FF" message="プロフィール" path="/profile" />
        <TabItem color="#CC00CC" message="管理者" path="/admin" />
        <TabItem color="#AACC77" message="ヌメロン" path="/numer0n" />
      </div>
    </div>
  );
};

export default PageTab;
