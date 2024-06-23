import HorizontalLine from "@/utils/HorizontalLine";
import "@/features/routes/admin/adminpage.css";

const AdminPage = () => {
    return (
        <div className="admin-page">
            <div className="admin-title">管理者のページ</div>
            <div className="admin-attention">
                情報等については、自身の協力と承認を得て作成しています。<br />
                写真の無断転載は禁止します。
            </div>
            <HorizontalLine />
        </div>
    )
}

export default AdminPage;