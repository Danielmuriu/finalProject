import React from "react";

const Navigation = () => {
  return (
      <nav className="w-full fixed top-0 left-0 bg-white shadow-sm z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 lg:px-20">
                    <div className="flex items-center gap-2">
                      <img src="https://lh3.googleusercontent.com/p/AF1QipP3BJTtO7M0IIHzGbuyjKp0PF8cSApNfn_POwmR=s680-w680-h510" alt="Purpink Logo" className="h-12 w-12 rounded-full" />
                      <div>
                        <h1 className="text-2xl font-bold">Gifts Paradise</h1>
                        <p className="text-xs text-gray-600">Kenya</p>
                      </div>
                    </div>
                            <ul className="hidden lg:flex gap-10 font-medium">
                                      <li>Home</li>
                                                <li>Features</li>
                                                          <li>Products</li>
                                                                    <li>About</li>
                                                                              <li>Contact</li>
                                                                                      </ul>
                                                                                              <button className="lg:hidden p-2 border rounded">Menu</button>
                                                                                                    </div>
                                                                                                        </nav>
                                                                                                          );
                                                                                                          };

                                                                                                          export default Navigation;
                                                                                                          