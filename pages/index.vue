<template>
  <div class="container">
    <!-- 헤더 섹션: 자기소개 -->
    <section class="hero">
      <!-- <h1>Kum GyoJoong</h1> -->
      <h1>{{ $t('name') }}</h1>
      <h2>Backend Developer</h2>
      <p>{{ $t('work_description') }}</p>
    </section>

    <!-- 기술 스택 섹션 -->
    <section class="skills">
      <h2>{{ $t('skill_stacks') }}</h2>
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
      <h2>{{ $t('projects.company_projects.title') }}</h2>
      <p>{{ $t('projects.company_projects.intro') }}</p>
      <div class="projects">
        <!-- 회사 프로젝트 1 -->
        <div class="project-card">
          <h3>Metaverse2</h3>
          <p>{{ $t('projects.company_projects.metaverse2.title') }}<br/>
            {{ $t('projects.company_projects.metaverse2.description') }}<br/>
            {{ $t('projects.company_projects.metaverse2.note') }}
            <a href="https://undefined-21.gitbook.io/metaverse2-whitepaper-eng" target="_blank">({{ $t('projects.company_projects.metaverse2.whitepaper') }})</a><br/>
          </p>
          <NuxtLink :to="$localePath('/projects/project-a')">{{ $t('view_details') }}</NuxtLink>
        </div>
        
        <!-- 회사 프로젝트 2 -->
        <div class="project-card">
          <h3>list-it</h3>
          <p>{{ $t('projects.company_projects.list_it.title') }}<br/>
            {{ $t('projects.company_projects.list_it.description') }}<br/>
            {{ $t('projects.company_projects.list_it.note') }} <a href="https://list-it.xyz/" target="_blank">({{ $t('projects.company_projects.list_it.address') }})</a><br/>
          </p>
          <NuxtLink :to="$localePath('/projects/project-b')">{{ $t('view_details') }}</NuxtLink>
        </div>
      </div>
    </section>

     <section class="project-highlights">
      <h2>{{ $t('projects.personal_projects.title') }}</h2>
      <p>{{ $t('projects.personal_projects.intro') }}</p>
      <div class="projects">
        <!-- 개인 프로젝트 1-->
        <div class="project-card">
          <h3>GPT Voicevox Chatbot</h3>
          <p>{{ $t('projects.personal_projects.llm_chat.title') }}<br/>
            {{ $t('projects.personal_projects.llm_chat.description') }}<br/>
          </p>
          <br/>
          <a href="https://github.com/david419kr/GPT-voicevox-chatbot" target="_blank">{{ $t('detail') }}:  GitHub</a><br/>
        </div>
        
        <!-- 개인 프로젝트 2-->
        <div class="project-card">
          <h3>Wildcards and Danbooru Autocomplete for NovelAI Diffusion</h3>
          <p>{{ $t('projects.personal_projects.novel_ai_helper.title') }}<br/>
            {{ $t('projects.personal_projects.novel_ai_helper.description') }}<br/>
            {{ $t('projects.personal_projects.novel_ai_helper.note') }}
          </p>
          <a href="https://chromewebstore.google.com/detail/wildcards-and-danbooru-au/ecfhpcpddnambbmgkpkoojolldpfaimd?authuser=0&hl=ko" target="_blank">{{ $t('deployment') }}:  Chrome Web Store</a><br/>
          <a href="https://github.com/david419kr/wildcards-for-novelai-diffusion/tree/full_autocomplete_experimental" target="_blank">{{ $t('detail') }}:  GitHub</a><br/>
        </div>
        
        <!-- 개인 프로젝트 3-->
        <div class="project-card">
          <h3>Apple Journal to Diarium Migration Tool</h3>
          <p>{{ $t('projects.personal_projects.journal_migrator.title') }}<br/>
            {{ $t('projects.personal_projects.journal_migrator.description') }}<br/>
            {{ $t('projects.personal_projects.journal_migrator.note') }}
          </p>
          <a href="https://github.com/david419kr/AppleJournal2Diarium" target="_blank">{{ $t('detail') }}:  GitHub</a><br/>
        </div>

        <!-- 개인 프로젝트 4-->
        <div class="project-card">
          <h3>Video Watermark Removal Script for Lama Cleaner</h3>
          <p>{{ $t('projects.personal_projects.watermark_remover.title') }}<br/>
            {{ $t('projects.personal_projects.watermark_remover.description') }}<br/>
            {{ $t('projects.personal_projects.watermark_remover.note') }}
          </p>
          <a href="https://github.com/david419kr/AppleJournal2Diarium" target="_blank">{{ $t('detail') }}:  GitHub</a><br/>
        </div>

        <!-- 개인 프로젝트 5-->
        <div class="project-card">
          <h3>Windows Floating Button</h3>
          <p>{{ $t('projects.personal_projects.floating_button.title') }}<br/>
            {{ $t('projects.personal_projects.floating_button.description') }}<br/>
            {{ $t('projects.personal_projects.floating_button.note') }}
          </p>
          <a href="https://github.com/david419kr/WindowsFloatingButton" target="_blank">{{ $t('detail') }}:  GitHub</a><br/>
        </div>

        <!-- 개인 프로젝트 6-->
        <div class="project-card">
          <h3>Waifuc Booru Crawler GUI</h3>
          <p>{{ $t('projects.personal_projects.booru_downloader.title') }}<br/>
            {{ $t('projects.personal_projects.booru_downloader.description') }}<br/>
            {{ $t('projects.personal_projects.booru_downloader.note') }}
          </p>
          <a href="https://github.com/david419kr/waifuc_booru_crawler_GUI" target="_blank">{{ $t('detail') }}:  GitHub</a><br/>
        </div>

        <!-- 개인 프로젝트 7-->
        <div class="project-card">
          <h3>Auto Call Summarize</h3>
          <p>{{ $t('projects.personal_projects.call_summary.title') }}<br/>
            {{ $t('projects.personal_projects.call_summary.description') }}<br/>
            {{ $t('projects.personal_projects.call_summary.note') }}<br/>
            {{ $t('projects.personal_projects.call_summary.tech') }}
          </p>
          <a href="https://github.com/david419kr/auto_call_summarize" target="_blank">{{ $t('detail') }}:  GitHub</a><br/>
        </div>

        <!-- 개인 프로젝트 8-->
        <div class="project-card">
          <h3>Portfolio</h3>
          <p>{{ $t('projects.personal_projects.portfolio.title') }}<br/>
            {{ $t('projects.personal_projects.portfolio.description') }}<br/>
            {{ $t('projects.personal_projects.portfolio.note') }}
          </p>
          <a href="https://github.com/david419kr/portfolio" target="_blank">{{ $t('detail') }}:  GitHub</a><br/>
        </div>
      </div>
    </section>

    <!-- 연락처 섹션 -->
    <section class="contact">
      <h2>{{ $t('contact.title') }}</h2>
      <div class="contact-info">
        <p><b>{{ $t('contact.email') }}:</b> <a href="mailto:david419kr@gmail.com">david419kr@gmail.com</a></p>
        <p><b>{{ $t('contact.github') }}:</b> <a href="https://github.com/david419kr" target="_blank">github.com/david419kr</a></p>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style src="~/assets/css/index.css"></style>
