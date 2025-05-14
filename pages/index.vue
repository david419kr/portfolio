<template>
  <div class="container">
    <!-- 헤더 섹션: 자기소개 -->
    <section class="hero">
      <h1>Kum GyoJoong</h1>
      <h2>（금교중 / グム・ギョジュン）</h2>
      <h2>Backend Developer</h2>
      <p>業務としては主にJavascriptとPythonを用いたBackend開発を行っており、個人としてはChrome拡張機能など色々と開発しています。</p>
    </section>

    <!-- 기술 스택 섹션 -->
    <section class="skills">
      <h2>技術スタック</h2>
      <div class="skill-list">
        <div class="skill-item">Python</div>
        <div class="skill-item">Django</div>
        <div class="skill-item">Javascript</div>
        <div class="skill-item">Typescript</div>
        <div class="skill-item">Node.js</div>
        <div class="skill-item">Express</div>
        <div class="skill-item">Nest.js</div>
        <div class="skill-item">AWS</div>
        <div class="skill-item">Docker</div>
        <div class="skill-item">PostgreSQL</div>
        <div class="skill-item">PostGIS</div>
        <div class="skill-item">SQLite</div>
        <div class="skill-item">MySQL</div>
        <div class="skill-item">MongoDB</div>
      </div>
    </section>

    <!-- 프로젝트 섹션 -->
    <section class="project-highlights">
      <h2>会社プロジェクト</h2>
      <p>会社プロジェクトのコードは公開できませんが、「詳細を見る」から公開し得る限りの詳細を御覧いだだけます。</p>
      <div class="projects">
        <!-- 회사 프로젝트 1 -->
        <div class="project-card">
          <h3>Metaverse2</h3>
          <p>仮想土地運営・売買サービス。<br/>
            NestJSのBackend及びPostgreSQLのDatabase設計から開発、サービス立ち上げ、運営まで持続的に幅広く携わる。<br/>
            現在はサービス終了していますが、どういったサービスだったかは当時の白書を御覧いただけます。
            <a href="https://undefined-21.gitbook.io/metaverse2-whitepaper-eng" target="_blank">(Metaverse2 Whitepaper)</a><br/>
          </p>
          <NuxtLink to="/projects/project-a">詳細を見る</NuxtLink>
        </div>
        
        <!-- 회사 프로젝트 2 -->
        <div class="project-card">
          <h3>list-it</h3>
          <p>スポーツコレクション売買サービス。<br/>
            DjangoのBackend及びMySQLのDatabaseでの開発。大型リニューアルを担当し、API全般に携わる。<br/>
            現在も運営中であり、アドレスはこちらになります。<a href="https://list-it.xyz/" target="_blank">(list-it.xyz)</a><br/>
          </p>
          <NuxtLink to="/projects/project-b">詳細を見る</NuxtLink>
        </div>
      </div>
    </section>

     <section class="project-highlights">
      <h2>個人プロジェクト</h2>
      <p>個人プロジェクトはGitHubで公開していますので、GitHubから詳細なコードやReadmeを御覧いだだけます。</p>
      <div class="projects">
        <!-- 개인 프로젝트 1-->
        <div class="project-card">
          <h3>GPT Voicevox Chatbot</h3>
          <p>ChatGPTやGrok、OllamaなどのLLM APIを使い、キャラクターとの会話を楽しめる音声付きのチャットボット。<br/>
            フロントエンドはPythonのStreamlitを使用し、DBはSQLiteを使用。<br/>
          </p>
          <br/>
          <a href="https://github.com/david419kr/GPT-voicevox-chatbot" target="_blank">詳細：GitHub</a><br/>
        </div>
        
        <!-- 개인 프로젝트 2-->
        <div class="project-card">
          <h3>Wildcards and Danbooru Autocomplete for NovelAI Diffusion</h3>
          <p>NovelAIというAI画像生成サービスの利用を補助するChrome拡張機能。<br/>
            csvやtxtからリストを読み取り、タグを自動補完機能するUIを提供。追加したtxtをフォルダーで管理したり、HTML上で編集できる簡易エディター内蔵。<br/>
            2025年現在、Chromeウェブストアで公開中です。
          </p>
          <a href="https://chromewebstore.google.com/detail/wildcards-and-danbooru-au/ecfhpcpddnambbmgkpkoojolldpfaimd?authuser=0&hl=ko" target="_blank">配布：Chrome Web Store</a><br/>
          <a href="https://github.com/david419kr/wildcards-for-novelai-diffusion/tree/full_autocomplete_experimental" target="_blank">詳細：GitHub</a><br/>
        </div>
        
        <!-- 개인 프로젝트 3-->
        <div class="project-card">
          <h3>Apple Journal to Diarium Migration Tool</h3>
          <p>iPhoneのApple公式ジャーナルアプリから、Diariumへとデータをマイグレーションするツール。<br/>
            Apple Journalでエクスポートしたデータを分析し、Diariumアプリでインポートできる形式に変換。<br/>
            iPhoneからAndroidへと移行する際に、Apple JournalのデータをDiariumに移行するため、Pythonで開発。
          </p>
          <a href="https://github.com/david419kr/AppleJournal2Diarium" target="_blank">詳細：GitHub</a><br/>
        </div>

        <!-- 개인 프로젝트 4-->
        <div class="project-card">
          <h3>Video Watermark Removal Script for Lama Cleaner</h3>
          <p>動画の透かしを消すスクリプト。<br/>
            動画の透かしを消すために、FFmpegで動画を分割し、lama cleanerで透かしを消した後、再度FFmpegで結合。全自動化のため、PythonとPowershell/Batchスクリプトを使用。<br/>
            他のプロジェクトに比べ、若干片手間で開発したため少し不本意ですが、今のところ、自分のGithubで一番StarとForkをもらっているプロジェクトです。
          </p>
          <a href="https://github.com/david419kr/AppleJournal2Diarium" target="_blank">詳細：GitHub</a><br/>
        </div>

        <!-- 개인 프로젝트 5-->
        <div class="project-card">
          <h3>Windows Floating Button</h3>
          <p>スマートフォンでよく見られる、画面上に浮いている半透明ボタンをWindowsで使えるツール。<br/>
            ボタンに割り当てるアプリや色、透明度、大きさなどを設定でき、画面上に複数個同時にボタンを並べられます。<br/>
            Autohotkey 2.0で開発し、exeで配布中。
          </p>
          <a href="https://github.com/david419kr/WindowsFloatingButton" target="_blank">詳細：GitHub</a><br/>
        </div>

        <!-- 개인 프로젝트 6-->
        <div class="project-card">
          <h3>Waifuc Booru Crawler GUI</h3>
          <p>boooru系の画像配布サイトでイメージクローリングするGUIツール。<br/>
            CUIのクローリングライブラリーであるwaifucを、GUIで使えるようにラッピング。<br/>
            PythonのPyQtでGUIを開発し、booruで用いられるタグの自動補完機能を内蔵。
          </p>
          <a href="https://github.com/david419kr/waifuc_booru_crawler_GUI" target="_blank">詳細：GitHub</a><br/>
        </div>

        <!-- 개인 프로젝트 7-->
        <div class="project-card">
          <h3>Auto Call Summarize</h3>
          <p>通話録音を文字に起こし、AIで要約。<br/>
            現状、AI通話要約は大抵製造元依存的で、依存せず自前でAI通話要約を使えるように開発。<br/>
            WhisperXで音声を文字に起こし、OpenAI APIで要約。AndroidのTaskerと連携すると、全自動でAI通話要約が可能。<br/>
            Node.jsとExpressで開発し、REST APIで使用可能。
          </p>
          <a href="https://github.com/david419kr/auto_call_summarize" target="_blank">詳細：GitHub</a><br/>
        </div>

        <!-- 개인 프로젝트 8-->
        <div class="project-card">
          <h3>日本語のポートフォリオ</h3>
          <p>当ポートフォリオそのもの。<br/>
            フロントエンド専門ではありませんし、ポートフォリオ自体初作成とあって拙い出来ですが、NuxtJSを使い、Webページとしてご覧いただけるように作ってみました。<br/>
            コードはGitHubに公開していますので、そちらから御覧いただけます。
          </p>
          <a href="https://github.com/david419kr/portfolio_jp" target="_blank">詳細：GitHub</a><br/>
        </div>
      </div>
    </section>

    <!-- 연락처 섹션 -->
    <section class="contact">
      <h2>連絡先</h2>
      <div class="contact-info">
        <p>Email: david419kr@gmail.com</p>
        <p>GitHub: <a href="https://github.com/david419kr" target="_blank">github.com/david419kr</a></p>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style src="~/assets/css/index.css"></style>
