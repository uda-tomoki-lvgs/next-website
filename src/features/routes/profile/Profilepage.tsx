import BackgroundImage from "@/utils/backgroundImage";
import HorizontalLine from "@/utils/HorizontalLine";
import profile from "@/../public/profile.png";
import TableRow from "@/features/routes/profile/TableRow";
import "@/features/routes/profile/profilepage.css";

const carrer = `高校時代まで、愛知県の田舎町（豊川市）で生まれ育った
小学時代はわんぱく少年で親に迷惑かけることもしばしば
中・高校時代はひたすら勉学に励む
大学在学中に色々なアルバイトを経験
4年次に安くて美味いサイゼリヤに出会う
現在はITエンジニアとして、日々奮闘中`;

const ProfilePage = () => {
    return (
        <div className="profile-page" style={BackgroundImage(profile)}>
            <div className="profile-title">宇田 知生のプロフィール</div>
            <table className="profile-table">
                <tbody>
                    <TableRow title="本名" item="宇田 知生（うだ ともき）" />
                    <TableRow title="生年月日" item="2000年8月26日 乙女座 辰年" />
                    <TableRow title="血液型" item="Ａ型" />
                    <TableRow title="出身地" item="愛知県豊川市" />
                    <TableRow title="学歴" item="名古屋大学理学部 化学科卒業" />
                    <TableRow title="サイズ" item="身長161cm 体重55kg 靴24cm" />
                    <TableRow title="趣味" item="ピクミン、読書、プログラミング" />
                    <TableRow title="経歴" item={carrer} />
                    <TableRow title="保有資格" item="TOEIC L&R 830、基本情報技術者試験" />
                </tbody>
            </table>
            <HorizontalLine />
        </div>
    );
}

export default ProfilePage;