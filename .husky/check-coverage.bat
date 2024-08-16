#!/bin/bash

# Path to your coverage report
COVERAGE_REPORT_PATH='./coverage/lcov-report/index.xml'

# Desired minimum coverage percentage
MIN_COVERAGE=80

# Extract coverage percentage from the report
COVERAGE=$(xmlstarlet sel -t -v '//coverageLine/@linesCovered' $COVERAGE_REPORT_PATH | awk '{print ($1*100)/$2}')

if (( $(echo "$COVERAGE < $MIN_COVERAGE" | bc -l) )); then
  echo "Coverage is below the required threshold of $MIN_COVERAGE%"
  exit 1
else
  echo "Coverage meets the required threshold."
  exit 0
fi