# Card Sorting Task (jsPsych)

This repository contains a **Card Sorting Task** implemented using the **jsPsych** library (de Leeuw, J. R., 2015). It is based on the principles of the **Berg's Card Sorting Test** (Fox et al., 2013) and is designed to measure executive functions, including cognitive flexibility and abstract reasoning.

---

## 🚀 Getting Started

To run the task, open the `index.html` file located in either the **`offline`** or **`online`** folder.

| Folder | Subject ID & Session | Use Case |
| :--- | :--- | :--- |
| **`offline`** | Subject and session numbers can be customized upon startup. | Local testing, lab settings. |
| **`online`** | A 15-character long random subject ID is automatically generated. | Online data collection. |

### Browser Requirements

The task is compatible with most modern browsers.

**Incompatible Browsers:** Safari and Internet Explorer.

---

## 🧠 Task Structure and Procedure

The task requires the user to classify a target card based on a hidden sorting rule (Color, Shape, or Number).

### Stimuli and Sorting

1.  **Reference Cards:** Four stationary reference cards appear at the top of the screen. Each card is unique across three properties:
    * **Card 0:** 1 Red Triangle
    * **Card 1:** 2 Green Stars
    * **Card 2:** 3 Yellow Diamonds
    * **Card 3:** 4 Blue Circles
2.  **Target Card:** A fifth card appears below the reference cards.
3.  **Classification:** The user classifies the target card by **clicking on one of the four reference cards**.
4.  **Feedback:** Immediate feedback ("Correct" or "Wrong") is provided after each click, but the sorting rule is not revealed.

### Rules and Progression

* A total of **64 target cards** are presented.
* **Rule Change Criterion:** The sorting rule automatically changes after **10 consecutive correct answers**.
* **Rule Sequence:** The rules are presented in a fixed, repeating order for up to six categories: **Color, Shape, Number, Color, Shape, Number**.
* **Categories:** Successful completion of the sequence allows up to **six categories** to be achieved.

---

## ⚙️ Setting Options

The task's language can be customized by modifying the **`parameters.js`** file:

* **Variable:** `language`
* **Available Languages:** English (`en`), Hungarian (`hu`), French (`fr`), Portuguese (`pt`).

---

## 💾 Output File Data

The experiment generates a comprehensive data file, including raw variables for trial-by-trial analysis and aggregated statistical variables.

### Trial-Level Variables

| Variable | Description |
| :--- | :--- |
| **`subject`** | 15-char random ID (online) or custom number (offline). |
| **`session`** | Custom session number (offline version only). |
| **`rt`** | Reaction time for the card sort (in ms). |
| **`card_number`** | Index of the presented target card (1-64). |
| **`correct`** | Whether the card was sorted correctly (`true` or `false`). |
| **`correct_in_row`** | Number of consecutive correct answers (resets to 0 on an error). |
| **`number_of_rule`** | The current rule being applied (1-6). |
| **`category_completed`** | The number of categories successfully completed (0-6). |
| **`applied_rule`** | The rule the user *actually* used for the classification (C, S, or N). |
| **`perseverative_error`** | Error where the user used the **same rule as the previous choice** (1 = yes, 0 = no). |
| **`perseverative_response`** | Incorrect response that would have been correct for the **previous category** (1 = yes, 0 = no). |
| **`non_perseverative_error`** | Incorrect responses that are not perseverative (1 = yes, 0 = no). |
| **`failure_to_maintain`** | Error after 5+ consecutive correct responses but before the category was completed (1 = yes, 0 = no). |
| **`total_errors`** | Cumulative number of errors (1-64). |
| **`correct_card`** | The number of the correct card according to the rule currently applied. |
| **`color_rule`**, **`shape_rule`**, **`number_rule`** | The correct reference card number (0-3) if that rule were hypothetically applied. |
| **`trial_type`**, **`test_part`**, **`stimulus`**, etc. | Standard jsPsych and task event variables. |

### Summary Statistics (STAT\_ Columns)

The following columns provide aggregate statistics calculated at the end of the task:

| Statistic Variable | Description |
| :--- | :--- |
| **`STAT_nr_of_trials`** | Total number of sorting trials (usually 64). |
| **`STAT_p_of_correct_trials`** | Percentage of correct trials. |
| **`STAT_nr_of_of_total_errors`** | Total number of errors. |
| **`STAT_p_of_errors`** | Percentage of errors. |
| **`STAT_category_achieved`** | Number of categories successfully completed (0-6). |
| **`STAT_nr_of_perseverative_responses`** | Total number of perseverative responses. |
| **`STAT_nr_of_perseverative_errors`** | Total number of perseverative errors. |
| **`STAT_p_perseverative_errors`** | Percentage of perseverative errors (out of total trials). |
| **`STAT_failure_to_maintain_set`** | Number of times five or more consecutive correct responses occur without completing the category. |
| **`STAT_trials_to_complete_first_category`** | Trials needed to achieve the first 10 consecutive correct responses. |

---

## 📝 Citation

If you use this script in your research, please include the following citation in your manuscript: Vékony, T. (2022). Card Sorting Task created with jsPsych (Version 1.0.1) [Computer software]. https://doi.org/10.5281/zenodo.7093470
