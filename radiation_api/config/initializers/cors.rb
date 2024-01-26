Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins "https://radiation_link.com", "http://localhost:3000"
    resource "/api/*",
      methods: [:get, :post, :put, :patch, :delete],
      headers: :any
    resource "*", methods: :get, headers: :any
  end
end
