json.extract! task, :id, :project_id, :complete, :name, :created_at, :updated_at
json.url task_url(task, format: :json)
