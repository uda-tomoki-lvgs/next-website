import Link from "next/link";
import HorizontalLine from "@/utils/HorizontalLine";
import BackgroundImage from "@/utils/backgroundImage";
import toppage from "@/../public/toppage.png";
import "@/features/routes/top/toppage.css";

const TopPage = () => {
  return (
    <div className="top-page" style={BackgroundImage(toppage)}>
      <div className="site-title">
        <div>宇田 知生の</div>
        <div>ホームページ</div>
      </div>
      <div className="flex-info">
        <div className="left-info">
          <img className="self-photo" src="/myself.jpeg" />
          <div className="self-index">
            宇田 知生（うだ ともき）
            <br />
            生年月日 2000年8月26日
            <br />
            血液型 A型
            <br />
            <Link href="/profile">プロフィール</Link>
          </div>
          <div className="contact-message">
            If you have any questions
            <br />
            no matter what you think,
            <br />
            please do not hesitate
            <br />
            to contact me through
            <br />
            the following instagram account.
            <br />
          </div>
          <div className="contact-info">instagram: <Link href="https://www.instagram.com/tomoki.826/" target="_blank">@tomoki826</Link></div>
          <div className="contact-address">
            大学時代の住所:
            <br />
            466-0802
            <br />
            愛知県名古屋市神山町1-3
            <br />
            ビラ三秀神村305号
            <br />
            TEL（警視庁）: +81-3-3581-0141
          </div>
        </div>
        <div className="right-info">
          <div className="latest-info-title">★★★　最新情報　★★★</div>
          <HorizontalLine />
          <div className="latest-info">
            ・サイゼリヤ <Link href="https://www.saizeriya.co.jp/PDF/irpdf001480.pdf" target="_blank">夏の新メニュー</Link>
            <br />
            <span>バッファローモッツァレラのマルゲリータピザ</span>
            <br />
            <span>ミックスグリル 2024年6月12日（水）発売開始</span>
          </div>
          <HorizontalLine />
          <div className="attention-info">
            当サイトの内容、テキスト、画像等の無断転載・無断使用を固く禁じます。
            <br />
            また、まとめサイト等への引用を厳禁致します。
            <br />
            お問い合わせはインスタグラムでご連絡をお願い致します。
            <br />
            <br />
            ※最近、SNS上で宇田知生を名乗るアカウントがあるといった“なりすまし”の報告が寄せられておりませんが、宇田本人は一切行っておりませんので、ご注意ください
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPage;
