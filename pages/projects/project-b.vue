<template>
  <div class="project-detail-container">
    <div class="project-header">
      <h1>list-it.xyz 大型リニューアル作業の詳細</h1>
      <p class="project-intro">
        スポーツコレクション取引プラットフォーム「List-it」のバックエンドシステムを全面的にリニューアルしました。RESTful API アーキテクチャに基づき、ユーザー認証から商品管理、決済システムに至るまで包括的な機能を実装し、スケーラブルで保守性の高いシステムを構築しました。
      </p>
    </div>

    <section class="project-section">
      <h2>プロジェクト概要</h2>
      <p>
        Djangoフレームワークとクラスベースビューを活用し、スポーツカードやコレクションアイテムの売買プラットフォームを支える複雑なバックエンドシステムを開発しました。オークション形式と直接販売の二つの販売方式をサポートし、多様な商品カテゴリやタグ、検索フィルターを実装しました。特に状態管理システム（商品状態、支払い状態、計算状態など）の設計に力を入れ、ユーザー体験の向上に貢献しました。
      </p>
    </section>

    <section class="project-section">
      <h2>技術スタック</h2>
      <ul class="tech-stack-list">
        <li><strong>バックエンド</strong>: Django REST Framework</li>
        <li><strong>データベース</strong>: MySQL</li>
        <li><strong>デプロイ</strong>: AWS</li>
        <li><strong>API設計</strong>: RESTful API アーキテクチャ</li>
        <li><strong>バージョン管理</strong>: Git</li>
        <li><strong>開発環境</strong>: ローカル開発環境とステージング環境の構築</li>
      </ul>
    </section>

    <section class="project-section">
      <h2>主要実装機能</h2>
      
      <div class="feature-item">
        <h3>ユーザー認証・管理システム</h3>
        <p>
          電子メール認証を含む堅牢なユーザー登録プロセスを実装し、JWTを使用したセキュアなアクセス制御システムを構築しました。アクセストークンとリフレッシュトークンの二重トークン認証方式により、セキュリティと利便性を両立させています。その他、GoogleやAppleの認証も実装し、ユーザーの利便性を向上させました。
        </p>
      </div>
      
      <div class="feature-item">
        <h3>商品管理システム</h3>
        <p>
          複雑な商品データモデルを設計し、カテゴリ、タグ、オプション値などの多様な属性を管理できるシステムを構築しました。特にスポーツコレクションアイテムに特化した属性（チーム、リーグ、年代、グレーディングなど）を柔軟に管理できる構造を実現しました。
        </p>
      </div>
      
      <div class="feature-item">
        <h3>販売システム</h3>
        <p>
          オークション形式と固定価格販売の二つの販売方式をサポートするAPI設計を行い、それぞれの販売方式に適した状態管理を実装しました。特に入札、支払い、配送、検品など複雑なステータス遷移を効率的に管理する仕組みを構築しました。
        </p>
      </div>
      
      <div class="feature-item">
        <h3>クーポンシステム</h3>
        <p>
          柔軟なクーポン管理システムを実装し、割引率、最低購入額、最大割引額、利用可能カテゴリなど様々な条件を設定できるようにしました。また、ユーザーごとのクーポン発行・使用履歴管理機能も実装しました。
        </p>
      </div>
      
      <div class="feature-item">
        <h3>販売者管理システム</h3>
        <p>
          販売者申請プロセスの設計と実装を行い、口座情報や事業者情報の管理、販売実績の集計機能を開発しました。また、販売者専用のダッシュボード用APIも構築し、売上管理や商品状態の確認が容易にできるようにしました。
        </p>
      </div>
      
      <div class="feature-item">
        <h3>バックグラウンドタスク管理</h3>
        <p>
          Django Background Tasksを用い、オークションや配達などの期限付きのタスクの管理を自動かつ安定的にで行えるようにしました。
        </p>
      </div>
    </section>

    <section class="project-section">
      <h2>技術的課題と解決策</h2>
      
      <div class="challenge-item">
        <h3>複雑な状態管理</h3>
        <p>
          多様な商品状態（出品中、支払い待ち、配送中など）と計算状態（未処理、処理中、完了など）の管理が複雑でしたが、明確なステータスコードと状態遷移ロジックを設計することで解決しました。また、状態別の商品リスト取得APIを実装し、フロントエンドでの表示を容易にしました。
        </p>
      </div>
      
      <div class="challenge-item">
        <h3>パフォーマンス最適化</h3>
        <p>
          大量の商品データと複雑な関連モデルによるクエリパフォーマンスの問題に対して、適切なインデックス設計とクエリ最適化を行いました。また、ページネーションやフィルタリングの効率化により、APIレスポンス速度を大幅に改善しました。
        </p>
      </div>
      
      <div class="challenge-item">
        <h3>柔軟な検索・フィルタリング</h3>
        <p>
          多様な条件（価格範囲、カテゴリ、チーム、リーグなど）による商品検索と絞り込みを可能にするAPIを設計しました。クエリパラメータを活用した柔軟なフィルタリングシステムにより、ユーザーの探しやすさを向上させました。
        </p>
      </div>
    </section>

    <section class="project-section">
      <h2>プロジェクト成果</h2>
      <p>
        このAPI改修により、システムの拡張性と保守性が大幅に向上し、新機能の追加が容易になりました。また、RESTful設計原則に基づいた一貫性のあるAPI構造により、フロントエンド開発チームとの連携がスムーズになり、開発効率が向上しました。
      </p>
      <p>
        Django REST Frameworkの利点を最大限に活用し、モデル駆動開発とクラスベースビューの採用により、コード再利用性を高め、開発速度と品質の向上に貢献しました。
      </p>
    </section>

    <div class="project-footer">
      <NuxtLink to="/" class="back-button">ポートフォリオに戻る</NuxtLink>
      <a href="https://list-it.xyz" target="_blank" class="site-link">list-it サイトを見る</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectB',
  head() {
    return {
      title: 'List-it 大型リニューアル | ポートフォリオ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'スポーツコレクション取引プラットフォーム「List-it」のバックエンドシステム全面リニューアルプロジェクトの詳細'
        }
      ]
    }
  }
}
</script>

<style scoped>
.project-detail-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.project-header {
  margin-bottom: 2rem;
  text-align: center;
}

.project-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  border-bottom: 3px solid #3498db;
  padding-bottom: 1rem;
}

.project-intro {
  font-size: 1.125rem;
  line-height: 1.6;
  color: #555;
}

.project-section {
  margin-bottom: 2.5rem;
}

.project-section h2 {
  font-size: 1.8rem;
  color: #2980b9;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3498db;
}

.tech-stack-list {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
}

.tech-stack-list li {
  padding: 0.75rem;
  background-color: #f8f9fa;
  border-left: 3px solid #3498db;
  border-radius: 0 4px 4px 0;
}

.feature-item, .challenge-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
}

.feature-item h3, .challenge-item h3 {
  color: #2c3e50;
  font-size: 1.4rem;
  margin-bottom: 0.75rem;
}

.feature-item p, .challenge-item p {
  line-height: 1.5;
  color: #555;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e0e0e0;
}

.back-button, .site-link {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.back-button {
  background-color: #f0f0f0;
  color: #333;
}

.site-link {
  background-color: #3498db;
  color: white;
}

.back-button:hover {
  background-color: #e0e0e0;
}

.site-link:hover {
  background-color: #2980b9;
}

@media (max-width: 768px) {
  .project-header h1 {
    font-size: 2rem;
  }
  
  .tech-stack-list {
    grid-template-columns: 1fr;
  }
  
  .project-footer {
    flex-direction: column;
    gap: 1rem;
  }
  
  .back-button, .site-link {
    text-align: center;
  }
}
</style>
