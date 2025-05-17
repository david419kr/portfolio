<template>
  <div class="project-detail-container">
    <div class="project-header">
      <h1>{{ $t('project-a.title') }}</h1>
      <p class="project-intro">
        {{ $t('project-a.intro') }}
      </p>
    </div>

    <section class="project-section">
      <h2>{{ $t('project-a.overview.title') }}</h2>
      <p>
        {{ $t('project-a.overview.content') }}
      </p>
    </section>

    <section class="project-section">
      <h2>{{ $t('project-a.tech_stack.title') }}</h2>
      <ul class="tech-stack-list">
        <li><strong>{{ $t('project-a.tech_stack.backend') }}</strong>: Express, NestJS</li>
        <li><strong>{{ $t('project-a.tech_stack.database') }}</strong>: PostgreSQL</li>
        <li><strong>{{ $t('project-a.tech_stack.geo_data') }}</strong>: PostGIS</li>
        <li><strong>{{ $t('project-a.tech_stack.deployment') }}</strong>: AWS, Docker</li>
        <li><strong>{{ $t('project-a.tech_stack.api_design') }}</strong>: RESTful API</li>
        <li><strong>{{ $t('project-a.tech_stack.version_control') }}</strong>: Git</li>
      </ul>
    </section>

    <section class="project-section">
      <h2>{{ $t('project-a.features.title') }}</h2>
      
      <div class="feature-item">
        <h3>{{ $t('project-a.features.auth_system.title') }}</h3>
        <p>
          {{ $t('project-a.features.auth_system.description') }}
        </p>
      </div>
      
      <div class="feature-item">
        <h3>{{ $t('project-a.features.virtual_land.title') }}</h3>
        <p>
          {{ $t('project-a.features.virtual_land.description') }}
        </p>
      </div>
      
      <div class="feature-item">
        <h3>{{ $t('project-a.features.payment.title') }}</h3>
        <p>
          {{ $t('project-a.features.payment.description') }}
        </p>
      </div>
      
      <div class="feature-item">
        <h3>{{ $t('project-a.features.mining.title') }}</h3>
        <p>
          {{ $t('project-a.features.mining.description') }}
        </p>
      </div>
      
      <div class="feature-item">
        <h3>{{ $t('project-a.features.trading.title') }}</h3>
        <p>
          {{ $t('project-a.features.trading.description') }}
        </p>
      </div>
      
      <div class="feature-item">
        <h3>{{ $t('project-a.features.community.title') }}</h3>
        <p>
          {{ $t('project-a.features.community.description') }}
        </p>
      </div>
    </section>

    <section class="project-section">
      <h2>{{ $t('project-a.challenges.title') }}</h2>
      
      <div class="challenge-item">
        <h3>{{ $t('project-a.challenges.geo_data_management.title') }}</h3>
        <p>
          {{ $t('project-a.challenges.geo_data_management.description') }}
        </p>
      </div>
      
      <div class="challenge-item">
        <h3>{{ $t('project-a.challenges.resource_system.title') }}</h3>
        <p>
          {{ $t('project-a.challenges.resource_system.description') }}
        </p>
      </div>
      
      <div class="challenge-item">
        <h3>{{ $t('project-a.challenges.transactions.title') }}</h3>
        <p>
          {{ $t('project-a.challenges.transactions.description') }}
        </p>
      </div>
    </section>

    <section class="project-section">
      <h2>{{ $t('project-a.results.title') }}</h2>
      <p>
        {{ $t('project-a.results.content1') }}
      </p>
      <p>
        {{ $t('project-a.results.content2') }}
      </p>
    </section>

    <div class="project-footer">
      <NuxtLink :to="$localePath('/')" class="back-button">{{ $t('project-a.back_button') }}</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Metaverse2Project',
  head() {
    return {
      title: this.$t('project-a.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('project-a.meta.description')
        }
      ]
    }
  }
}
</script>

<style src="~/assets/css/project.css"></style>
