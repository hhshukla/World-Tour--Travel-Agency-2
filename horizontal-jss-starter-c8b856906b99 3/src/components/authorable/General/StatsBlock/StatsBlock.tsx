import React, { useEffect, useRef, useState } from 'react';
import { Field, ImageField, Text, Image } from '@sitecore-jss/sitecore-jss-nextjs';

interface StatsBlockItemsProps {
  StatsBlockItems: StatsBlockItemsData[];
  StatsBlockTitle: Field<string>;
}
interface StatsBlockItemsData {
  id: string;
  url: string;
  name: string;
  displayName: string;
  fields: {
    SubText: Field<string>;
    Number: Field<number>;
    Image: ImageField;
  };
}
export type StatsBlockProps = {
  rendering: { componentName: string };
  params: { [key: string]: string };
  fields: StatsBlockItemsProps;
};

const StatsBlockItems = ({ fields }: StatsBlockProps) => {
  const [animatedNumber, setAnimatedNumber] = useState<string | number>('');
  const statsBlockRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const animateNumber = () => {
      if (fields?.StatsBlockItems && fields.StatsBlockItems.length > 0) {
        const animationDuration = 1000; // Adjust the animation duration as needed
        const steps = 50;

        // Access the correct Number field from the first item
        const initialNumber = fields?.StatsBlockItems[2]?.fields?.Number?.value;
        const step = initialNumber / steps;

        let currentStep = 0;
        const animationInterval = setInterval(() => {
          if (currentStep < steps) {
            currentStep++;
            const newValue = Math.round(currentStep * step);
            setAnimatedNumber(newValue);
          } else {
            clearInterval(animationInterval);
            setAnimatedNumber(initialNumber);
          }
        }, animationDuration / steps);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (animatedNumber === '') {
            animateNumber();
          }
        }
      });
    });

    if (statsBlockRef.current) {
      observer.observe(statsBlockRef.current);
    }

    return () => {
      if (statsBlockRef.current) {
        observer.unobserve(statsBlockRef.current);
      }
    };
  }, [animatedNumber, fields?.StatsBlockItems]);

  // Helper function to format a number with commas and preserve special characters
  const formattedNumber = (number: number | string) => {
    if (typeof number === 'number') {
      return number.toLocaleString();
    }
    return number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <div className=" py-10   w-full bg-white flex" ref={statsBlockRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 md:gap-3">
          {fields?.StatsBlockItems?.map((items, index) => (
            <div key={index} className="flex flex-col text-center">
              {animatedNumber !== '' && (
                <>
                  <div className="relative">
                    <Image field={items?.fields?.Image} className="p-4 w-full" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center ">
                      <div className="p-16 bg-white">
                        <Text
                          tag="span"
                          field={{
                            value: formattedNumber(animatedNumber),
                          }}
                          className="text-black text-5xl font-semibold"
                        />
                        <Text
                          tag="p"
                          field={items?.fields?.SubText}
                          className="text-black text-lg font-bold pt-5"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsBlockItems;
