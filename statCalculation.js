function statCalculation(trial) {
    let data = jsPsych.data.get();
    trial.STAT_nr_of_trials = data.filter({is_trial: true}).count(),
    trial.STAT_nr_of_correct = data.filter({is_trial: true, correct: true}).count(),
    trial.STAT_p_of_correct_trials = (data.filter({is_trial: true, correct: true}).count()/trial.STAT_nr_of_trials)*100,
    trial.STAT_nr_of_perseverative_responses = data.filter({is_trial: true, perseverative_response: true}).count(),
    trial.STAT_nr_of_perseverative_errors = data.filter({is_trial: true, perseverative_error: true}).count(),
    trial.STAT_nr_of_non_perseverative_errors = data.filter({is_trial: true, non_perseverative_error: true}).count(),
    trial.STAT_p_perseverative_errors = (trial.STAT_nr_of_perseverative_errors/trial.STAT_nr_of_trials)*100,
    trial.STAT_nr_of_total_errors = trial.STAT_nr_of_perseverative_errors + trial.STAT_nr_of_non_perseverative_errors,
    trial.STAT_p_of_errors = (trial.STAT_nr_of_total_errors/trial.STAT_nr_of_trials)*100,
    trial.STAT_category_achieved = data.select("category_completed").max(),
    trial.STAT_p_of_conceptual_level_responses = (data.filter({is_trial: true, conceptual_level_response: true}).count()/trial.STAT_nr_of_trials)*100,
    trial.STAT_failure_to_maintain_set = data.filter({is_trial: true, failure_to_maintain: true}).count(),
    trial.STAT_trials_to_complete_first_category = data.filter({category_completed: 0}).last(1).values()[0].card_number
}

