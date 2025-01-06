import os
from pathlib import Path
import sys


def main(folder: str):
    for i, filename in enumerate(os.listdir(folder)):
        if filename.endswith(".xlsx"):
            new_filename = (
                filename.replace(" ", "_")
                .replace("-", "_")
                .replace("“", "o")
                .replace("'", "_")
                .lower()
            )
            os.rename(folder / filename, folder / new_filename)


if __name__ == "__main__":

    args = sys.argv[1:]
    folder = args[0]
    script_dir = Path(__file__).parent
    folder = script_dir / folder
    main(folder)
