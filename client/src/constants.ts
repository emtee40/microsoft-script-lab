export const SETTINGS_SOLUTION_ID = 'user-settings'
export const SETTINGS_FILE_ID = 'settings'
export const SETTINGS_JSON_LANGUAGE = 'JSON'
export const ABOUT_FILE_ID = 'about'

export const NULL_FILE_ID = 'null-file'
export const NULL_FILE: IFile = {
  id: NULL_FILE_ID,
  name: '',
  content: '',
  language: '',
  dateCreated: 0,
  dateLastModified: 0,
}

export const NULL_SOLUTION_ID = 'null-solution'
export const NULL_SOLUTION: ISolution = {
  id: NULL_SOLUTION_ID,
  name: '',
  host: 'NULL',
  dateCreated: 0,
  dateLastModified: 0,
  files: [],
}

export const RUNNER_URL = 'https://bornholm-runner-edge.azurewebsites.net'

export const localStorageKeys = {
  customFunctionsLastHeartbeatTimestamp:
    'playground_custom_functions_last_heartbeat_timestamp',
  customFunctionsLastUpdatedCodeTimestamp:
    'playground_custom_functions_last_updated_code_timestamp',
  customFunctionsCurrentlyRunningTimestamp:
    'playground_custom_functions_currently_running_timestamp',
  log: 'playground_log',
}

export const CUSTOM_FUNCTIONS_INFO_URL = 'https://aka.ms/customfunctions'

export const EDITOR_PATH = '/'
