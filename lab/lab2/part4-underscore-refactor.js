(function(){

  var map = L.map('map', {
    center: [39.9522, -75.1639],
    zoom: 14
  });
  var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
  }).addTo(map);

  /* =====================

  # Lab 2, Part 4 — (Optional, stretch goal)
  
  ## Introduction

  You've already seen this file organized and refactored. In this lab, you will
  try to refactor this code to be cleaner and clearer - you should use the
  utilities and functions provided by underscore.js. Eliminate loops where possible.

  ===================== */

  // Mock user input
  // Filter out according to these zip codes:
  var acceptedZipcodes = [19106, 19107, 19124, 19111, 19118];
  // Filter according to enrollment that is greater than this variable:
  var minEnrollment = 300;


  // clean data
  _.each(schools,function(x) {
    // If we have '19104 - 1234', splitting and taking the first (0th) element
    // as an integer should yield a zip in the format above
    if (typeof x.ZIPCODE === 'string') {
      split = x.ZIPCODE.split(' ');
      normalized_zip = parseInt(split[0]);
      x.ZIPCODE = normalized_zip;
    }

    // Check out the use of typeof here — this was not a contrived example.
    // Someone actually messed up the data entry
    if (typeof x.GRADE_ORG === 'number') {  // if number
      x.HAS_KINDERGARTEN = x.GRADE_LEVEL < 1;
      x.HAS_ELEMENTARY = 1 < x.GRADE_LEVEL < 6;
      x.HAS_MIDDLE_SCHOOL = 5 < x.GRADE_LEVEL < 9;
      x.HAS_HIGH_SCHOOL = 8 < x.GRADE_LEVEL < 13;
    } else {  // otherwise (in case of string)
      x.HAS_KINDERGARTEN = x.GRADE_LEVEL.toUpperCase().indexOf('K') >= 0;
      x.HAS_ELEMENTARY = x.GRADE_LEVEL.toUpperCase().indexOf('ELEM') >= 0;
      x.HAS_MIDDLE_SCHOOL = x.GRADE_LEVEL.toUpperCase().indexOf('MID') >= 0;
      x.HAS_HIGH_SCHOOL = x.GRADE_LEVEL.toUpperCase().indexOf('HIGH') >= 0;
    }
  });

  var zipCode = _.each(schools,cleanData);

  // filter data
  var filtered_data = [];
  var filtered_out = [];
  _.filter(schools,function(x) {
    isOpen = x.ACTIVE.toUpperCase() == 'OPEN';
    isPublic = (x.TYPE.toUpperCase() !== 'CHARTER' ||
    x.TYPE.toUpperCase() !== 'PRIVATE');
    isSchool = (x.HAS_KINDERGARTEN ||
      x.HAS_ELEMENTARY ||
      x.HAS_MIDDLE_SCHOOL ||
      x.HAS_HIGH_SCHOOL);
      meetsMinimumEnrollment = x.ENROLLMENT > minEnrollment;
      meetsZipCondition = acceptedZipcodes.indexOf(x.ZIPCODE) >= 0;
      filter_condition = (isOpen &&
        isSchool &&
        meetsMinimumEnrollment &&
        !meetsZipCondition);

        if (filter_condition === true) {
          filtered_data.push(x);
        } else {
          filtered_out.push(x);
        }
      });
      console.log('Included:', filtered_data.length);
      console.log('Excluded:', filtered_out.length);
      console.log(schools.length);

      // main loop
      var color;
      _.each(filtered_data, function(x) {
        isOpen = x.ACTIVE.toUpperCase() == 'OPEN';
        isPublic = (x.TYPE.toUpperCase() !== 'CHARTER' ||
        x.TYPE.toUpperCase() !== 'PRIVATE');
        meetsMinimumEnrollment = x.ENROLLMENT > minEnrollment;

        // Constructing the styling  options for our map
        if (x.HAS_HIGH_SCHOOL){
          color = '#0000FF';
        } else if (x.HAS_MIDDLE_SCHOOL) {
          color = '#00FF00';
        } else {
          color = '##FF0000';
        }
        // The style options
        var pathOpts = {'radius': x.ENROLLMENT / 30,
        'fillColor': color};
        L.circleMarker([x.Y, x.X], pathOpts)
        .bindPopup(filtered_data[i].FACILNAME_LABEL)
        .addTo(map);
      });

    })();
