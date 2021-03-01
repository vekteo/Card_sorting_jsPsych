# WCST_JSPsych

A card sorting task created with JSPsych, based on the Berg's Card Sorting Task <a href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0063885">(Fox et al., 2013)</a>.

<h1>Structure of the task</h1>
<p>In the task, four cards appear on the screen. Each card has a different color, number, and shape property. From left to right: 1 red triangle, 2 green star, 3 yellow diamond, and 4 blue circle.</p>
<p>Below the four cards, a fifth one appears on the screen. The task is to classify the fifth card to one of the upper cards. The sorting can be done based on the color, number, or shape property. The user can classify the new card by cliking on one of the four cards.</p>
<p>The correct answer depends on a rule (color, number, or shape). The rule is not known by the user. However, a feedback is given to the user after each click (Correct or Wrong).</p>

<p>64 new cards as presented to the user. The rule changes after 10 consecutive correct answers. The order of the rules are: color, shape, number, color, shape, number.</p>

<h1>Output variables</h1>
<ul>
 <li><strong>success:</strong> whether fullscreen mode was successfully started/ended (true or false)</li>
 <li><strong>view_history:</strong> browser events during the task (fullscreenenter, fullscreenexit, blur, or focus)</li>
 <li><strong>rt:</strong> the reaction time of the sort</li>
 <li><strong>trial_type:</strong> JSPSych trialtype of the given trial (fullscreen, instructions or html-button-response)</li>
 <li><strong>trial_index:</strong> the number of the given trials (all events considered, even instructions, feedbacks!)</li>
 <li><strong>time_elapsed:</strong> the time elapsed from the start of the program in ms</li>
 <li><strong>internal_code_id:</strong> internal node id of the trial</li>
 <li><strong>stimulus:</strong> stimulus on the screen in HTML</li>
 <li><strong>button_press:</strong> the number of the card clicked (0-3; or null for feedback trials)</li>
 <li><strong>is_trial:</strong> whether the given trial is a sorting trial (sorting: true; feedback: false)</li>
 <li><strong>card_number:</strong> the number of the card presented (1-64)</li>
 <li><strong>correct:</strong> whether the card was sorted correctly (true or false)</li>
 <li><strong>image:</strong> the file path of the presented card</li>
 <li><strong>color:</strong> the color of the presented card</li>
 <li><strong>shape:</strong> the shape of the presented card</li>
 <li><strong>number:</strong> the number of the presented card</li>
 <li><strong>color_rule:</strong> the number of the correct card if the color rule is applied (0-3)</li>
 <li><strong>shape_rule:</strong> the number of the correct card if the shape rule is applied (0-3)</li>
 <li><strong>number_rule:</strong> the number of the correct card if the number rule is applied (0-3)</li>
 <li><strong>correct_in_row:</strong> how many cards were sorted correctly including this card (if answer is wrong, 0; is answer is correct, 1-10)</li>
 <li><strong>correct_card:</strong> the number of the correct card according to the rule currently applied</li>
 <li><strong>number_of_rule:</strong> the number of the rule applied (augments after each 10 consecutive correct answers, 1-6)</li>
 <li><strong>category_completed:</strong> the number of the completed categories (0-6)</li>
 <li><strong>perseverative_error:</strong> whether the answer was a perseverative error, i.e., where the user used the same rule as for the previous choice (yes: 1, no: 0)</li>
 <li><strong>non_perseverative_error:</strong> incorrect responses which are not perseverative (yes: 1, no: 0)</li>
 <li><strong>non_perseverative_error:</strong> incorrect responses which are not perseverative (yes: 1, no: 0)</li>
 <li><strong>total_errors:</strong> the cumulative number of errors (1-64)</li>
 <li><strong>failure_to_maintain:</strong> whether the incorrect response occured after at least 5 consecutive correct answers, but before the category is completed (the errors at category changes are not counted) (yes: 1, no: 0)</li>
 <li><strong>applied_rule:</strong> the rule the user used (C - color, S - shape, N - number) - multiple letters when multiple applied rules are possible</li>
 <li><strong>perseverative_response:</strong> incorrect response that would have been correct for the previous category (yes: 1, no: 0)</li>
 <li><strong>conceptual_level_response:</strong> correct response that occured in a run of three or more (yes: 1, no: 0)</li>
 <li><strong>key_press:</strong> JS code of key pressed</li>
</ul>
  
In the columns start with STAT, basic statistics are calculated:
<ul>
 <li><strong>STAT_nr_of_trials:</strong> number of trials (normally 64)</li>
 <li><strong>STAT_p_of_correct_trials:</strong> percentage of correct trials</li>
 <li><strong>STAT_nr_of_perseverative_responses:</strong> number of perseverative responses</li>
 <li><strong>STAT_nr_of_perseverative_errors:</strong> number of perseverative errors</li>
 <li><strong>STAT_nr_of_non_perseverative_errors:</strong> number of non-perseverative errors</li>
 <li><strong>STAT_p_perseverative_errors:</strong> percentage of perseverative errors (% of the the total number of trials)</li>
 <li><strong>STAT_nr_of_total_errors:</strong> total number of errors</li>
 <li><strong>STAT_p_of_errors:</strong> percentage of errors (% of the total number of trials)</li>
 <li><strong>STAT_category_achieved:</strong> the number of categories successfully completed (0-6)</li>
 <li><strong>STAT_p_of_conceptual_level_responses:</strong> the percentage of conceptual level responses (% of the total number of trials)</li>
 <li><strong>STAT_failure_to_maintain_set:</strong> the number of times five or more consecutive correct responses occur without completing the category (do not reach 10 consecutibe correct)</li>
 <li><strong>STAT_trials_to_complete_first_category:</strong> the number of trials needed to achieve the first 10 consecutive correct responses/li>
</ul>

<h1>Setting optins</h1>
The language of the task can be set in the parameters.js file by modifying the variable "language". Available languages: english (en), hungarian (hu)

<h1>Browser requirements</h1>
Any browser except Safari and Internet Explorer.
 
