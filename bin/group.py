import csv
import pprint
import sys


def main(file_path):
    grouped_data = {}
    with open(file_path) as f:
        reader = csv.reader(f)
        next(reader)  # Skip the header row
        for row in reader:
            site = row[0]
            crop = row[9]
            if site not in grouped_data:
                grouped_data[site] = {}
            if crop not in grouped_data[site]:
                grouped_data[site][crop] = []
            datapoint = {
                "tha": float(row[1]),
                "emmean": float(row[2]),
                "se": float(row[3]),
                "df": float(row[4]),
                "lower_cl": float(row[5]),
                "upper_cl": float(row[6]),
            }
            grouped_data[site][crop].append(datapoint)
    for location in grouped_data:
        for crop in grouped_data[location]:
            grouped_data[location][crop] = sorted(
                grouped_data[location][crop], key=lambda x: x["tha"]
            )
    for location in grouped_data:
        for crop in grouped_data[location]:
            zero_reference = grouped_data[location][crop][0]["emmean"]
            for i, datapoint in enumerate(grouped_data[location][crop]):
                datapoint["yield_response"] = datapoint["emmean"] - zero_reference
                datapoint["yield_response_lower"] = datapoint["lower_cl"] - zero_reference
                datapoint["yield_response_upper"] = datapoint["upper_cl"] - zero_reference

    pprint.pprint(grouped_data)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python group.py <file>")
        sys.exit(1)

    file_path = sys.argv[1]

    main(file_path)
