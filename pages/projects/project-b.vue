<template>
  <div class="project-detail-container">
    <div class="project-header">
      <h1>{{ $t('project-b.title') }}</h1>
      <p class="project-intro">
        {{ $t('project-b.intro') }}
      </p>
    </div>

    <section class="project-section">
      <h2>{{ $t('project-b.overview.title') }}</h2>
      <p>
        {{ $t('project-b.overview.content') }}
      </p>
    </section>

    <section class="project-section">
      <h2>{{ $t('project-b.tech_stack.title') }}</h2>
      <ul class="tech-stack-list">
        <li><strong>{{ $t('project-b.tech_stack.backend') }}</strong>: Django</li>
        <li><strong>{{ $t('project-b.tech_stack.database') }}</strong>: MySQL</li>
        <li><strong>{{ $t('project-b.tech_stack.deployment') }}</strong>: AWS</li>
        <li><strong>{{ $t('project-b.tech_stack.api_design') }}</strong>: RESTful API</li>
        <li><strong>{{ $t('project-b.tech_stack.version_control') }}</strong>: Git</li>
        <li><strong>{{ $t('project-b.tech_stack.dev_environment') }}</strong>: Local / Staging</li>
      </ul>
    </section>

    <section class="project-section">
      <h2>{{ $t('project-b.features.title') }}</h2>
      
      <div class="feature-item">
        <h3>{{ $t('project-b.features.auth_system.title') }}</h3>
        <p>
          {{ $t('project-b.features.auth_system.description') }}
        </p>
      </div>
      
      <div class="feature-item">
        <h3>{{ $t('project-b.features.product_system.title') }}</h3>
        <p>
          {{ $t('project-b.features.product_system.description') }}
        </p>
      </div>
      
      <div class="feature-item">
        <h3>{{ $t('project-b.features.sales_system.title') }}</h3>
        <p>
          {{ $t('project-b.features.sales_system.description') }}
        </p>
      </div>
      
      <div class="feature-item">
        <h3>{{ $t('project-b.features.coupon_system.title') }}</h3>
        <p>
          {{ $t('project-b.features.coupon_system.description') }}
        </p>
      </div>
      
      <div class="feature-item">
        <h3>{{ $t('project-b.features.seller_system.title') }}</h3>
        <p>
          {{ $t('project-b.features.seller_system.description') }}
        </p>
      </div>
      
      <div class="feature-item">
        <h3>{{ $t('project-b.features.background_tasks.title') }}</h3>
        <p>
          {{ $t('project-b.features.background_tasks.description') }}
        </p>
      </div>
    </section>

    <section class="project-section">
      <h2>{{ $t('project-b.challenges.title') }}</h2>
      
      <div class="challenge-item">
        <h3>{{ $t('project-b.challenges.state_management.title') }}</h3>
        <p>
          {{ $t('project-b.challenges.state_management.description') }}
        </p>
      </div>
      
      <div class="challenge-item">
        <h3>{{ $t('project-b.challenges.performance.title') }}</h3>
        <p>
          {{ $t('project-b.challenges.performance.description') }}
        </p>
      </div>
      
      <div class="challenge-item">
        <h3>{{ $t('project-b.challenges.search_filter.title') }}</h3>
        <p>
          {{ $t('project-b.challenges.search_filter.description') }}
        </p>
      </div>
    </section>

    <section class="project-section">
      <h2>{{ $t('project-b.results.title') }}</h2>
      <p>
        {{ $t('project-b.results.content1') }}
      </p>
      <p>
        {{ $t('project-b.results.content2') }}
      </p>
    </section>

    <div class="project-footer">
      <NuxtLink :to="$localePath('/')" class="back-button">{{ $t('project-b.footer.back_button') }}</NuxtLink>
      <a href="https://list-it.xyz" target="_blank" class="site-link">{{ $t('project-b.footer.visit_site') }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectB',
  head() {
    return {
      title: this.$t('project-b.meta.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('project-b.meta.description')
        }
      ]
    }
  }
}
</script>

<style src="~/assets/css/project.css"></style>