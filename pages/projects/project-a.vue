<template>
  <div class="project-detail-container">
    <div class="project-header">
      <h1>バーチャルランド取引プラットフォーム「Metaverse2」の開発</h1>
      <p class="project-intro">
        仮想土地の運営・売買サービス「Metaverse2」のバックエンドシステムとデータベースを、初期設計から開発、ローンチ、運用まで一貫して担当しました。PostgreSQLとPostGISを活用した地理空間データ管理システムを構築し、ユーザーが実際の地球の地図上で仮想土地を取引できるプラットフォームを実現しました。
      </p>
    </div>

    <section class="project-section">
      <h2>プロジェクト概要</h2>
      <p>
        「Metaverse2」は、実際の地図データに基づいた仮想空間で、ユーザーが10m×10mの区画単位で土地を購入・運営・取引できるプラットフォームです。Express/NestJSをバックエンドに、PostgreSQL/PostGISによる地理空間データ管理を駆使し、仮想土地の所有権管理から資源採掘、コミュニティ運営まで包括的なシステムを開発しました。Metaverse2はブロックチェーン関連機能も提供していましたが、私は主にブロックチェーン以外の、バックエンドAPIと地形データ管理システムの設計・実装を担当しました。
      </p>
    </section>

    <section class="project-section">
      <h2>技術スタック</h2>
      <ul class="tech-stack-list">
        <li><strong>バックエンド</strong>: Express, NestJS</li>
        <li><strong>データベース</strong>: PostgreSQL</li>
        <li><strong>地理空間データ</strong>: PostGIS</li>
        <li><strong>デプロイメント</strong>: AWS, Docker</li>
        <li><strong>API設計</strong>: RESTful API アーキテクチャ</li>
        <li><strong>バージョン管理</strong>: Git</li>
      </ul>
    </section>

    <section class="project-section">
      <h2>主要実装機能</h2>
      
      <div class="feature-item">
        <h3>ユーザー認証・管理システム</h3>
        <p>
          JWTを活用した堅牢な認証システムを構築し、ユーザー登録、プロフィール管理、権限制御などの機能を実装しました。二段階認証にも対応し、セキュリティ強化とユーザー保護を実現しました。
        </p>
      </div>
      
      <div class="feature-item">
        <h3>バーチャルランドシステム</h3>
        <p>
          PostgreSQLのPostGIS拡張機能を活用して地理空間データを効率的に管理し、Mapboxの実際の地球地図をベースに10m×10m単位で区画分けされた仮想土地システムを構築しました。位置情報に基づく検索や領域選択などの複雑な地理的クエリを最適化し、スムーズな土地管理体験を実現しました。
        </p>
      </div>
      
      <div class="feature-item">
        <h3>入金システム</h3>
        <p>
          PayPalおよび銀行システムと連携し、ユーザーの入金を自動検出して残高に反映するシステムを開発しました。特にPostgreSQLのlisten/notifyトリガー機能を活用することで、リアルタイム処理と高い信頼性を両立させた決済システムを実現しました。
        </p>
      </div>
      
      <div class="feature-item">
        <h3>資源・トークン採掘システム</h3>
        <p>
          cronjobを利用して、ユーザーが所有する土地の種類に応じて資源やトークンを自動的に生成・付与するシステムを構築しました。土地タイプごとに異なる採掘率や希少資源の出現確率を設定し、経済バランスを考慮した設計を行いました。
        </p>
      </div>
      
      <div class="feature-item">
        <h3>土地取引システム</h3>
        <p>
          ユーザー間で仮想土地を安全かつ効率的に売買できる取引システムを開発しました。エスクローの仕組みを実装し、取引の信頼性を確保するとともに、価格履歴の追跡や市場分析機能も提供しました。
        </p>
      </div>
      
      <div class="feature-item">
        <h3>都市コミュニティシステム</h3>
        <p>
          各都市エリアに仮想土地を持つユーザー同士がコミュニケーションを取れるコミュニティ機能と、市長選出による自治システムを開発しました。選挙機能や政策提案・投票機能を実装し、土地の価値や税率などの政策を民主的に決定できる仕組みを構築しました。
        </p>
      </div>
    </section>

    <section class="project-section">
      <h2>技術的課題と解決策</h2>
      
      <div class="challenge-item">
        <h3>地理空間データの効率的管理</h3>
        <p>
          膨大な量の地理空間データを効率的に処理するため、PostGISのインデックス最適化と空間クエリのチューニングを行いました。特に広範囲の地図表示と詳細な区画情報の両立が課題でしたが、ズームレベルに応じたデータ取得の階層化により解決しました。
        </p>
      </div>
      
      <div class="challenge-item">
        <h3>スケーラブルな資源生成システム</h3>
        <p>
          数十万区画の土地から定期的に資源を生成する処理は大きな負荷となりました。この課題に対し、バッチ処理の分散化とキューイングシステムの導入により、システム負荷を分散させつつ、すべての土地に対して公平な資源生成を実現しました。
        </p>
      </div>
      
      <div class="challenge-item">
        <h3>リアルタイムトランザクション処理</h3>
        <p>
          土地取引や資源移動などのトランザクションをリアルタイムで処理する必要がありました。PostgreSQLのトランザクション機能とイベント駆動アーキテクチャを組み合わせ、データの整合性を保ちながら高速な処理を実現しました。
        </p>
      </div>
    </section>

    <section class="project-section">
      <h2>プロジェクト成果</h2>
      <p>
        サービスローンチから6ヶ月で登録ユーザー数7万人を達成し、仮想土地の総取引額は5億円を超えました。特に地理空間データの効率的な管理と処理により、100万区画以上の土地情報をリアルタイムで表示・操作できるシステムを実現し、ユーザー体験の向上に大きく貢献しました。
      </p>
      <p>
        このプロジェクトを通じて、当時新人開発者だった私は、大規模な地理空間データベースの設計・実装から、複雑なビジネスロジックの実装、そして本番環境での運用まで、一連のバックエンド開発ライフサイクルを経験することができました。
      </p>
    </section>

    <div class="project-footer">
      <NuxtLink to="/" class="back-button">ポートフォリオに戻る</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Metaverse2Project',
  head() {
    return {
      title: 'Metaverse2 開発プロジェクト | ポートフォリオ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '仮想土地取引プラットフォーム「Metaverse2」のバックエンドおよびデータベース開発プロジェクトの詳細'
        }
      ]
    }
  }
}
</script>

<style src="~/assets/css/project.css"></style>
